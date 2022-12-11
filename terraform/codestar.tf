resource "aws_codestarconnections_connection" "codestar_sourcecode_connection" {
  name          = "github-timhuynh0905-connection"
  provider_type = "GitHub"
}
