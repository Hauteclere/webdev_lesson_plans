function saySomething(someName, callbackFunction) {
    let errorText = null;

    if (typeof someName !== "string") {
        errorText = "Name must be a string!";
    }

    if (someName.length <1) {
        errorText = "Name is too short!"
    }

    callbackFunction(errorText, someName);
}

function hello(errorMessage, personsName) {
    if (errorMessage) {
        console.log(errorMessage);
        return;
    }

    console.log(`Hello, ${personsName}!!`);
}

function goodbye(errorMessage, personsName) {
    if (errorMessage) {
        console.log(errorMessage);
        return;
    }

    console.log(`Goodbye, ${personsName}!!`);
}

saySomething("Antares", goodbye);
saySomething("Persephone", hello);
saySomething(3.141529, hello);
saySomething("", goodbye);

saySomething("Kurt VanHouten", (errorMessage, personsName) => {console.log(`${personsName}, I want a divorce.`)})