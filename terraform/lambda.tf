// https://www.ensonodigital.com/blog/terraform-does-not-need-your-code-to-provision-a-lambda-function
data "archive_file" "starter" {
  type        = "zip"
  output_path = "${path.module}/${var.LAMBDA_FUNCTION_NAME}.zip"
  source {
    content  = "hello"
    filename = "index.txt"
  }
}

resource "aws_lambda_function" "lambda_function" {
  filename      = data.archive_file.starter.output_path
  function_name = var.LAMBDA_FUNCTION_NAME
  role          = aws_iam_role.lambda_function_role.arn
  architectures = ["x86_64"]
  handler       = "build/index.handler"
  runtime       = "nodejs18.x"
}
