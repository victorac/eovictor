variable "domain_name" {
  description = "The domain name (e.g., app.example.com)"
  type        = string
}

variable "hosted_zone_name" {
  description = "The base domain for Route 53 (e.g., example.com)"
  type        = string
}