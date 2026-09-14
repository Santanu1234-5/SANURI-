$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Listening on http://localhost:8080/"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        
        $localFilePath = Join-Path $PWD $path
        
        if (Test-Path $localFilePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localFilePath)
            if ($path -match "\.html$") { $response.ContentType = "text/html" }
            elseif ($path -match "\.jpg$") { $response.ContentType = "image/jpeg" }
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
}
finally {
    $listener.Stop()
}
