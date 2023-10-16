declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'dev' | 'hom' | 'prod',
            USER_NAME: string,
            USER_PASS: string,
            SECRET: string,
            BEARER: string,
            PORTFOLIO_BOT: string
        }
    }
}

export {}