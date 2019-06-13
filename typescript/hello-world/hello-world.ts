class HelloWorld {
    static hello(name: string = "world"): string {
        return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
    }
}

export default HelloWorld