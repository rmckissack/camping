({
    clickCreateItem: function(component, event, helper) {
        var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validCamping){
            // Create the new item
            var newItem = component.get("v.newItem");
            console.log("Create camping item: " + JSON.stringify(newItem));
            // helper.createItem(component, newItem);
            var theCampingItems = component.get("v.items");
 
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newItem = JSON.parse(JSON.stringify(newItem));
 
        theCampingItems.push(newItem);
        component.set("v.items", theCampingItems);        
        }
    }
})