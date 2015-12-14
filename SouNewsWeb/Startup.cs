using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SouNewsWeb.Startup))]
namespace SouNewsWeb
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
