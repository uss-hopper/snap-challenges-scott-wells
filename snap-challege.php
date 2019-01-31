// input a string and verify that it is less than 280 characters
<?php
//first version
function poorMansMethod(string $input) : void {
	//$input = filter_var($input, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);

	if(empty($input) === true) {
		echo "you must add content to your input";
	}
	// verify the avatar URL will fit in the database
	if(strlen($input) > 280) {
		echo "input is incorrect length";
	}
} function richMansMethod(string $input) : void {
	$input = filter_var($input, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);

	if(empty($input) === true) {
		throw(new \InvalidArgumentException("profile at handle is empty or insecure"));
	}
	// verify the avatar URL will fit in the database
	if(strlen($input) > 280) {
		throw(new \RangeException("profile at handle is too large"));
	}
} try {
	richMansMethod("");
} catch (\InvalidArgumentException | \RangeException $e) {
	var_dump($e);
}
var_dump(poorMansMethod("this is my content"));