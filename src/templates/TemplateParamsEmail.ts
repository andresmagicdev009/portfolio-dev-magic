export interface TemplateParamsEmail {
    name: string; 
    email: string;
    message: string;
}

export interface EmailJSParams extends Record<string, unknown> {
    from_name: string;
    from_email: string;
    message: string;
    to_name: string;
}