using Microsoft.EntityFrameworkCore;
using UserApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Adicione os serviços ao contêiner.
builder.Services.AddDbContext<UserContext>(options =>
    options.UseSqlServer("Server=BECA\\MSSQLSERVER01;Database=mybank;Trusted_Connection=True;Encrypt=True;TrustServerCertificate=True;")); // Substitua SEU_SERVIDOR pela conexão correta

builder.Services.AddControllers();

var app = builder.Build();

// Configure o pipeline HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
