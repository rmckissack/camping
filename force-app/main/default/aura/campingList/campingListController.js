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
            var newCampingItem = component.get("v.newItem");
            var campings = component.get("items");
            var item = JASON.parse(JASON.stringify(newCampingItem));
            
            campings.push(item);
            component.set("v.items",campings);
            component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,'Price__c': 0,'Packed__c': false});
            
        }
    }
})