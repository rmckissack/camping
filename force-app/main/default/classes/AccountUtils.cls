public class AccountUtils {
    
    public static List<Account> accountsByState (String accountState){
        
        List<Account> Results = [SELECT ID, Name, BillingState FROM Account WHERE BillingState= :accountState];
        
        return Results;
    }

}
