import Router from "@koa/router";
import { Next, ParameterizedContext } from "koa";
import { State } from "../types";
import { logPostAsync } from "./log/post";

const router = new Router<State>()

router.get('/log',async (ctx:ParameterizedContext<State>, next:Next) => {
    ctx.body = 'hi',
    ctx.status = 200
    await next()
})
router.post('/log', logPostAsync)

export default router