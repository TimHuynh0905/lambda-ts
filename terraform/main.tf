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

variable "AWS_ACCOUNT_ID" {
  type = string
}

variable "LAMBDA_FUNCTION_NAME" {
  type = string
}
