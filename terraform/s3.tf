resource "aws_s3_bucket" "codepipeline_artifact_bucket" {
  bucket = "${var.LAMBDA_FUNCTION_NAME}-codepipeline-artifact-bucket"
}

resource "aws_s3_bucket_public_access_block" "codepipeline_artifact_bucket_public_access_block" {
  bucket = aws_s3_bucket.codepipeline_artifact_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket" "lambda_function_bucket" {
  bucket = "${var.LAMBDA_FUNCTION_NAME}-lambda-function-bucket"
}

resource "aws_s3_bucket_public_access_block" "lambda_function_bucket_public_access_block" {
  bucket = aws_s3_bucket.lambda_function_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
