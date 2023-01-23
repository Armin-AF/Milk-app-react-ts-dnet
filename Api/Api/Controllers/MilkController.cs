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
    
    [HttpPost]
    public ActionResult<Milk> AddMilk(Milk milk)
    {
        _milkList?.results.Add(milk);
        return CreatedAtAction(nameof(GetMilk), new { id = milk.id }, milk);
    }
    
    [HttpPut("{id}")]
    public IActionResult UpdateMilk(string id, Milk milk)
    {
        if (id != milk.id)
        {
            return BadRequest();
        }

        var existingMilk = _milkList?.results.FirstOrDefault(m => m.id == id);
        if (existingMilk is null)
        {
            return NotFound();
        }

        existingMilk.name = milk.name;
        existingMilk.type = milk.type;
        existingMilk.storage = milk.storage;
        existingMilk.id = milk.id;

        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public IActionResult DeleteMilk(string id)
    {
        var milk = _milkList?.results.FirstOrDefault(m => m.id == id);
        if (milk == null)
        {
            return NotFound();
        }

        _milkList?.results.Remove(milk);

        return NoContent();
    }
}


