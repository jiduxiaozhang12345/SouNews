using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;

namespace HTML5 {
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler {

        public void ProcessRequest(HttpContext context) {
            context.Response.ContentType = "text/html";
            int aa = Thread.CurrentThread.ManagedThreadId;
            Thread.Sleep(5);
            int bb = Thread.CurrentThread.ManagedThreadId;
            context.Response.Write("Hello World");
        }

        public bool IsReusable {
            get {
                return false;
            }
        }
    }
}