terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

variable "LAMBDA_FUNCTION_NAME" {
  type    = string
  default = "my_lambda_function"
}
