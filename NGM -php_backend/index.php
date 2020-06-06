<?php

// include database and object files
// include_once 'assets/config/database.php';
// include_once 'assets/upload_photo.php';
// include_once 'assets/message_contact_form.php';

$max_file_size = 120485760;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing File Upload</title>
</head>
<body>
    <form action="add_member.php" method="post" enctype="multipart/form-data">
        <label for="first_name">First Name:</label>
        <input type="text" name="first_name" id="">
        
        <label for="last_name">Last Name:</label>
        <input type="text" name="last_name" id="">

        <label for="user_desc">User Profile: </label>
        <input type="text" name="user_desc" id="">

        <input type="hidden" name="MAX_FILE_SIZE" value= <?php echo $max_file_size?>>
        <label for="photo_upload">Upload Photo: </label>
        <input type="file" name="upload_photo" id="">

        <button type="submit" name="submit_member_info">Add Member</button>
    </form>

    <h3>Contact Us Form</h3>
    <form action="contact_us.php" method="post">
        <label for="sender_name">Name:</label>
        <input type="text" name="sender_name" id="">

        <label for="sender_mail">Email:</label>
        <input type="email" name="sender_mail" id="">

        <label for="sender_message">Message:</label>
        <textarea type="textarea" name="sender_message" id=""></textarea>

        <button type="submit" name="send_message">Submit</button>

    </form>
</body>
</html>

