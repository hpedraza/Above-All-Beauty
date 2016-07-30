using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Above_All_Beauty.Startup))]
namespace Above_All_Beauty
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
