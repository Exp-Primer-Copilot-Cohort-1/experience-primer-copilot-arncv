function skillsMember(){
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var skillsMember = document.getElementById("skillsMember");
    var memberSkills = document.getElementById("memberSkills");
    if (skills.style.display === "none") {
        skills.style.display = "block";
        member.style.display = "none";
        skillsMember.style.display = "none";
        memberSkills.style.display = "block";
    } else {
        skills.style.display = "none";
        member.style.display = "block";
        skillsMember.style.display = "block";
        memberSkills.style.display = "none";
    }

}