import { Next, ParameterizedContext } from "koa";
import { logZodSchema, State } from "../../types";

export const logPostAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    const bodyparse = logZodSchema.safeParse(ctx.request.body)
    ctx.assert(bodyparse.success, 400)

    const { code, type, content } = bodyparse.data
    if (type === undefined || type==="log") {
        console.log('================================================')
        console.log('\x1b[32m%s\x1b[0m', code)
        console.log(content)
        console.log('================================================')
    }
    else if (type === "warning") {
        console.warn('================================================')
        console.warn('\x1b[33m%s\x1b[0m', code)
        console.warn(content)
        console.warn('================================================')
    }
    else if (type === "error") {
        console.error('================================================')
        console.error('\x1b[31m%s\x1b[0m', code)
        console.error(content)
        console.error('================================================')
    }
    else {
        console.log('================================================')
        console.log('\x1b[35m%s\x1b[0m', code, type)
        console.log(content)
        console.log('================================================')
    }

    ctx.status = 204
    
    await next()
}