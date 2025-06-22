(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/chatbot/AIChatbot.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AIChatbot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const welcomeMessage = `Welcome to Molisha! 🌸 Thank you for visiting us. We are here to help you with your queries about orders, exchanges, or returns. Please select an option:

1️⃣ I want to return the product
2️⃣ I want to exchange my product
3️⃣ When will my order get delivered?
4️⃣ I made the payment but haven’t received order confirmation
5️⃣ When will my exchange pickup happen?
6️⃣ When will I receive my exchange article?
7️⃣ I want to pay online
8️⃣ Talk to a human support agent`;
function getResponse(input) {
    const trimmed = input.trim();
    switch(trimmed){
        case "1":
            return `Please share the reason for return:
1️⃣ Received Wrong Product – Please send opening video and image to WhatsApp: 8329887600
2️⃣ Received Damaged Product – Please send image and opening video to WhatsApp: 8329887600
3️⃣ Other Reason

❗Return is only accepted for wrong or damaged products.`;
        case "2":
            return `✅ Yes, you can exchange your product easily. Please visit the *Orders* section on our website: www.molisha.in`;
        case "3":
            return `📦 Orders are usually delivered within *5 to 6 working days*.`;
        case "4":
            return `💳 Payment received but no confirmation?

Please wait 30 more minutes for automated Razorpay sync. If still not received, WhatsApp us at 8329887600.`;
        case "5":
            return `🚚 After submitting your exchange request online, pickup usually happens within *2 to 3 working days.*`;
        case "6":
            return `📦 You will receive your exchange article within *7 to 10 working days* after pickup.`;
        case "7":
            return `💳 We accept online payments via Razorpay. You can pay securely during checkout.`;
        case "8":
            return `👩‍💼 You can talk to a human support agent on WhatsApp: https://wa.me/9571354529`;
        default:
            return welcomeMessage;
    }
}
function AIChatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            from: "bot",
            text: welcomeMessage
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleChat = ()=>{
        setIsOpen(!isOpen);
    };
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatbot.useEffect": ()=>{
            scrollToBottom();
        }
    }["AIChatbot.useEffect"], [
        messages,
        isOpen
    ]);
    const handleSend = ()=>{
        if (!input.trim()) return;
        const userMessage = {
            from: "user",
            text: input.trim()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setTimeout(()=>{
            const botMessage = {
                from: "bot",
                text: getResponse(input)
            };
            setMessages((prev)=>[
                    ...prev,
                    botMessage
                ]);
        }, 500);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50 w-80 max-w-full font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleChat,
                "aria-label": "Toggle Chatbot",
                className: "bg-black text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-800 focus:outline-none",
                children: isOpen ? "×" : "💬"
            }, void 0, false, {
                fileName: "[project]/src/chatbot/AIChatbot.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 bg-white rounded-lg shadow-lg flex flex-col h-96",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200 font-semibold text-black",
                        children: "AI Chatbot"
                    }, void 0, false, {
                        fileName: "[project]/src/chatbot/AIChatbot.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-4 overflow-y-auto space-y-3 text-sm text-black",
                        children: [
                            messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${msg.from === "user" ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-lg p-2 max-w-xs whitespace-pre-wrap ${msg.from === "user" ? "bg-black text-white" : "bg-gray-200 text-black"}`,
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/chatbot/AIChatbot.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/src/chatbot/AIChatbot.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/src/chatbot/AIChatbot.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/chatbot/AIChatbot.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-t border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                rows: 2,
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                onKeyDown: handleKeyDown,
                                placeholder: "Type your message...",
                                className: "w-full resize-none border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            }, void 0, false, {
                                fileName: "[project]/src/chatbot/AIChatbot.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                className: "mt-2 w-full bg-black text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none",
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/src/chatbot/AIChatbot.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/chatbot/AIChatbot.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/chatbot/AIChatbot.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/chatbot/AIChatbot.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(AIChatbot, "Bqq5tXnhLgdZRJnpeUfPdOLYoSA=");
_c = AIChatbot;
var _c;
__turbopack_context__.k.register(_c, "AIChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_chatbot_AIChatbot_tsx_73254a67._.js.map