terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

variable "AWS_REGION" {
  type = string
}

variable "AWS_ACCOUNT_ID" {
  type = string
}

variable "LAMBDA_FUNCTION_NAME" {
  type = string
}

provider "aws" {
  region = var.AWS_REGION
}
