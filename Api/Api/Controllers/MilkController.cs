using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class MilkController : ControllerBase
{
    readonly MilkList? _milkList;

    public MilkController(){
        const string path = "/Users/rminafa/Projects/Milk-app-react-ts-dnet/Api/Api/Database/milk.json";
        _milkList = JsonConvert.DeserializeObject<MilkList>(System.IO.File.ReadAllText(path));
    }

    [HttpGet]
    public ActionResult<MilkList> GetAllMilk(){
        if (_milkList != null) return _milkList;
        return NotFound();
    }

    [HttpGet("{id}")]
    public ActionResult<Milk> GetMilk(string id)
    {
        var milk = _milkList?.results.FirstOrDefault(m => m.id == id);
        if (milk == null)
        {
            return NotFound();
        }

        return milk;
    }
}


