(function (countries) {
    var inp = $("input");
    var results = $("#results");
    var r = "";
    var choice = false;

    inp.on("input", function () {
        var val = inp.val();
        choice = false;

        if (!val) {
            results.html("");
            return;
        }

        var matches = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().startsWith(val.toLowerCase())) {
                matches.push(countries[i]);
            }
            if (matches.length == 4) {
                break;
            }
        }

        var result = "";
        if (!choice) {
            if (matches.length > 0) {
                for (var a = 0; a < matches.length; a++) {
                    result += "<p>" + matches[a] + "</p>";
                }
                results.html(result);
                r = result;
            } else if (matches.length == 0) {
                results.html("no result");
                r = "no result";
            }
        }
        results
            .on("mouseover", "p", function (e) {
                e.target.classList.add("highlight");
            })
            .on("mouseout", "p", function (e) {
                e.target.classList.remove("highlight");
            })
            .on("mousedown", "p", function (e) {
                inp.val(e.target.innerHTML);
                results.html("");
                choice = true;
            });
    })
        .on("keydown", function (e) {
            if (e.code == "ArrowDown") {
                if ($("#results p").hasClass("highlight")) {
                    $("#results p.highlight").next().addClass("highlight");
                    $("#results p.highlight").prev().removeClass("highlight");
                } else $("#results p:nth-child(1)").addClass("highlight");
            }
            if (e.code == "ArrowUp") {
                if (e.code == "ArrowUp") {
                    $("p.highlight").prev().addClass("highlight");
                    $("p.highlight").next().removeClass("highlight");
                }
                console.log(e.target, e.code);
            }
            if (e.code == "Backspace") {
                choice = false;
                results.html(r);
            }
            if (e.code == "Enter") {
                choice = true;
                inp.val($("p.highlight").html());
                results.html("");
            }
        })
        .on("blur", function () {
            results.html("");
            return;
        })
        .on("focus", function () {
            if (!choice) {
                results.html(r);
            }

            return;
        });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
