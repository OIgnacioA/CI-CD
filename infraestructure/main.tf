provider "hashicorp/azure" {
  features{}
  skip_provider_registration = true

}

resource "azurem_resourse_group" "rg" {

 name = var.rg_name
 location = var.location
}