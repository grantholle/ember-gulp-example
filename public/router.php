<?php

if (file_exists(__DIR__ . '/' . $_SERVER['REQUEST_URI']))
{
    return false; // Serve the requested resource as-is.
}
else
{
    include_once 'index.html';
}
