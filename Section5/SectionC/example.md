## Describe the form submission process

                            | POST                          | GET
-------------------------------------------------------------------------------------
back button                 | dangerous to resubmit         | harmless
bookmarked?                 | no                            | yes
cached?                     | no                            | yes
history                     | params not saved in history   | params saved in browser history
                            | POST request added to history |
restrictions (size)         | none                          | yes 2048 characters for URL
restrictions (data types)   | none                          | ASCII only
security                    | params not stored             | less secure
                            | a little safer than GET       | data stored as params
visibility                  | data not in URL               | data in URL
                            | - no visibility               | not for passwords or sensitive data