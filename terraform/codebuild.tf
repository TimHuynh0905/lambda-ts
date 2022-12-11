resource "aws_codebuild_project" "codebuild_project" {
  name         = "${var.LAMBDA_FUNCTION_NAME}-codebuild-project"
  service_role = aws_iam_role.codebuild_role.arn

  source {
    type            = "CODEPIPELINE"
    git_clone_depth = 0
  }

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    image        = "aws/codebuild/amazonlinux2-x86_64-standard:4.0"
    compute_type = "BUILD_GENERAL1_SMALL"
    type         = "LINUX_CONTAINER"

    environment_variable {
      name  = "ARTIFACT_BUCKET"
      value = aws_s3_bucket.lambda_function_bucket.bucket
    }

    environment_variable {
      name  = "LAMBDA_FUNCTION"
      value = var.LAMBDA_FUNCTION_NAME
    }
  }
}
