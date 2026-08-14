import urllib.request, re, urllib.parse

def get_unsplash_id(query):
    url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote("site:unsplash.com " + query)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req).read().decode("utf-8")
        matches = re.findall(r"unsplash\.com/photos/[^\"]+-([a-zA-Z0-9_-]{11})", html)
        if matches:
            return matches[0]
    except Exception as e:
        pass
    return None

queries = ["kerala houseboat", "kerala theyyam", "kalaripayattu", "kathakali kerala", "munnar tea", "wayanad forest"]
for q in queries:
    print(q, get_unsplash_id(q))
