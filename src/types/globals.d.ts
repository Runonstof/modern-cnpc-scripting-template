// Global scope type that accepts any property
interface GlobalScope {
    [key: string]: any;
}

// Define the structure of the class
interface ContextClass {
    getGlobal(): GlobalScope;
}

// Map the Java class name (string) to the structure
interface JavaClassMap {
    'jdk.nashorn.internal.runtime.Context': ContextClass;
    'noppes.npcs.api.NpcAPI': NpcAPI;
}

// Typed Java global
declare const Java: {
    type<K extends keyof JavaClassMap>(className: K): JavaClassMap[K];
    type<T = any>(className: string): T; // optional fallback
};
