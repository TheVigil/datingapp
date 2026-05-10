using System;
using API.Entities;

namespace API;

public class Member
{
    public string Id { get; set; } = null!;
    public DateOnly DateOfBirth { get; set; }
    public string? ImageUrl { get; set; }
    public required string DisplayName { get; set; }
    public DateTime Create { get; set; }
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public required string Gender { get; set; }
    public required string City { get; set; }
    public required string Country { get; set; }

    //Nav property
    public AppUser User { get; set; } = null!;

}
