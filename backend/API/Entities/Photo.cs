using System;

namespace API;

public class Photo
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public string? PublicId { get; set; }

    //Nav property
    public Member Member { get; set; } = null!;
}
