import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    role: "statement",
    nodeType: "pointerDecrement",
    priority: 0,
    isTopLevel: true,
}, [
    {
        tokenType: "lessThan",
    }
]);