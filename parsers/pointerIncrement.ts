import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    role: "statement",
    nodeType: "pointerIncrement",
    priority: 0,
    isTopLevel: true,
}, [
    {
        tokenType: "biggerThan",
    }
]);