resource "aws_iam_role" "codepipeline_role" {
  name = "${var.LAMBDA_FUNCTION_NAME}-codepipeline-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Service = "codepipeline.amazonaws.com"
        },
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy" "codepipeline_policy" {
  name = "${var.LAMBDA_FUNCTION_NAME}-codepipeline-policy"
  role = aws_iam_role.codepipeline_role.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "s3:GetObject",
          "s3:GetObjectVersion",
          "s3:GetBucketVersioning",
          "s3:PutObjectAcl",
          "s3:PutObject"
        ],
        Resource = [
          "${aws_s3_bucket.codepipeline_artifact_bucket.arn}",
          "${aws_s3_bucket.codepipeline_artifact_bucket.arn}/*"
        ]
      },
      {
        Effect = "Allow",
        Action = [
          "codestar-connections:UseConnection"
        ],
        Resource = "${aws_codestarconnections_connection.codestar_sourcecode_connection.arn}"
      },
      {
        Effect = "Allow",
        Action = [
          "codebuild:BatchGetBuilds",
          "codebuild:StartBuild"
        ],
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_role" "codebuild_role" {
  name = "${var.LAMBDA_FUNCTION_NAME}-codebuild-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Service = "codebuild.amazonaws.com"
        },
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy" "codebuild_policy" {
  name = "${var.LAMBDA_FUNCTION_NAME}-codebuild-policy"
  role = aws_iam_role.codebuild_role.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "logs:CreateLogGroup",
          "logs:PutLogEvents",
          "logs:CreateLogStream"
        ],
        Resource = [
          "arn:aws:logs:us-east-1:${var.AWS_ACCOUNT_ID}:log-group:/aws/codebuild/${aws_codebuild_project.codebuild_project.name}",
          "arn:aws:logs:us-east-1:${var.AWS_ACCOUNT_ID}:log-group:/aws/codebuild/${aws_codebuild_project.codebuild_project.name}:*"
        ]
      },
      {
        Effect = "Allow",
        Action = [
          "s3:GetObject",
          "s3:GetObjectVersion",
          "s3:GetBucketVersioning",
          "s3:PutObjectAcl",
          "s3:PutObject"
        ],
        Resource = [
          "${aws_s3_bucket.codepipeline_artifact_bucket.arn}/*",
          "${aws_s3_bucket.lambda_function_bucket.arn}/*"
        ]
      },
      {
        Effect = "Allow",
        Action = [
          "lambda:UpdateFunctionCode"
        ],
        Resource = [
          "${aws_lambda_function.lambda_function.arn}"
        ]
      }
    ]
  })
}

resource "aws_iam_role" "lambda_function_role" {
  name = "${var.LAMBDA_FUNCTION_NAME}-lambda-function-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        },
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy" "lambda_function_policy" {
  name = "${var.LAMBDA_FUNCTION_NAME}-lambda-function-policy"
  role = aws_iam_role.lambda_function_role.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Resource = [
          "arn:aws:logs:us-east-1:${var.AWS_ACCOUNT_ID}:log-group:/aws/lambda/${aws_lambda_function.lambda_function.function_name}",
          "arn:aws:logs:us-east-1:${var.AWS_ACCOUNT_ID}:log-group:/aws/lambda/${aws_lambda_function.lambda_function.function_name}:*"
        ]
      }
    ]
  })
}


