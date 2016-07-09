<?php

## CONFIG ##

# LIST EMAIL ADDRESS
$recipient = "zimin@chronasleep.com";

# SUBJECT (Subscribe/Remove)
$subject = "New Email Subscription";

# RESULT PAGE
$location = "http://www.chronasleep.com";

## FORM VALUES ##

# SENDER - WE ALSO USE THE RECIPIENT AS SENDER IN THIS SAMPLE
# DON'T INCLUDE UNFILTERED USER INPUT IN THE MAIL HEADER!
$sender = $recipient;

# MAIL BODY
//$body .= "Name: ".$_REQUEST['Name']." \n";
$body .= "Someone new has subcribed from your website.\n\n"."Email: ".$_REQUEST['Email']." \n";
# add more fields here if required

## SEND MESSGAE ##

mail( $recipient, $subject, $body, "From: $sender" ) or die ("Mail could not be sent.");

## SHOW RESULT PAGE ##

header( "Location: $location" );
?>