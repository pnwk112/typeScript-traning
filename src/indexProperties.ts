interface ErrorConainer {
    // id: string;
    [prop: string]: string // każdy key w obiekcie musi być typu string lub może być castowany na string oraz jego value musi być string
}

const errorBag: ErrorConainer = {
    email: "Email not valid",
    username: "User name must start with capital letter",
}
