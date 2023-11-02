terraform{
    backend "azurerm" {

        storage_account_name = "sehentstorageamin" #generalstorageamin"
        container_name       = "webappstate"
        key                  = "stateActions.tfstate"
  
    }


}