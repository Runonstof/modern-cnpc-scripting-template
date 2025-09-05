var URL = Java.type("java.net.URL");
var OutputStreamWriter = Java.type("java.io.OutputStreamWriter")
var BufferedReader = Java.type("java.io.BufferedReader")
var InputStreamReader = Java.type("java.io.InputStreamReader")


// Custom error class
class HttpError extends Error {
    constructor(response, responseCode) {
        super(`HttpError: ${responseCode}`);
        this.response = response;
    }
}

function request(method, url, requestBody = {}) {
    url = new URL(url);
    var connection = url.openConnection();
    connection.setRequestMethod(method)

    if (method === "POST") {
        connection.setRequestProperty("Content-Type", "application/json")
        connection.setDoOutput(true)
        if (requestBody) {
            var writer = new OutputStreamWriter(connection.getOutputStream(), "UTF-8")
            writer.write(JSON.stringify(requestBody))
            writer.flush()
            writer.close()
        }
    } else {
        connection.setDoOutput(false)
    }
    var responseCode = connection.getResponseCode()

    var reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))
    var response = ""
    var line;
    while ((line = reader.readLine()) != null) {
        response += line + '\n'
    }
    reader.close()

    if (!(responseCode >= 200 && responseCode < 400)) {
        throw new HttpError(response, responseCode);
    }

    connection.disconnect()

    return response;
}

function get(url) {
    return request("GET", url, null);
}

function post(url, requestBody) {
    return request("POST", url, requestBody);
}

function getJson(url) {
    return JSON.parse(get(url));
}

function postJson(url, requestBody) {
    return JSON.parse(post(url, requestBody));
}


export default {
    get,
    post,
    getJson,
    postJson,
    request,
    HttpError,
};