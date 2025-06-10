output "s3_bucket_name" {
  value = aws_s3_bucket.react_app.bucket
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "website_url" {
  value = "https://${var.domain_name}"
}