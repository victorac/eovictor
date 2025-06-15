# é o Victor!

[My website](eovictor.com)

It is about me. Professionally speaking.


Commands:

```bash
# Get distribution ID
aws cloudfront list-distributions --profile <sso-profile> --query 'DistributionList.Items[?Aliases.Items[0]==`eovictor.com`].Id' --output text
# Update files
aws s3 sync ../dist s3://eovictor-com/ --delete --profile <sso-profile>
# Invalidate cache
aws cloudfront create-invalidation --distribution-id <distribution-id> --paths "/*" --profile <sso-profile>
```
