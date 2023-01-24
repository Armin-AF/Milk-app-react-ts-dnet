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
    const string Path = "/Users/rminafa/Projects/Milk-app-react-ts-dnet/Api/Api/Database/milk.json";

    public MilkController(){
        _milkList = JsonConvert.DeserializeObject<MilkList>(System.IO.File.ReadAllText(Path));
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
    public IActionResult UpdateMilkStorage(string id, [FromBody] int newStorage)
    {
        var milk = _milkList?.results.FirstOrDefault(m => m.id == id);
        if (milk == null)
        {
            return NotFound();
        }

        milk.storage = newStorage;

        //Serialize the updated milk list object and write it back to the json file
        var updatedMilkList = JsonConvert.SerializeObject(_milkList);
        System.IO.File.WriteAllText(Path, updatedMilkList);

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


