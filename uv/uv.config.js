//const bare = localStorage.getItem("bareserver") || "https://artclass.site/bare/"

self.__uv$config = {
    prefix: '/service/',
    bare: localStorage.getItem("bareserver") || 'https://bare.artclass.site/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};