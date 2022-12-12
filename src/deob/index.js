const qn = require('./qn.js')
const Qo = require('./Qo.js')

const al = (t, e, a, n) => {
    if (!e.length)
        return [];
    const { minPostingId: i, minDate: r, minPostedDate: s, locations: o, locationDescriptions: l, neighborhoods: h } = t;
    o.forEach(((t, e) => {
        const [a, n, i] = t || [];
        o[e] = a ? {
            areaId: a,
            hostname: n,
            subareaAbbr: i
        } : 0
    }
    ));
    const u = new Date(1e3 * r).getTime()
        , c = t => {
            const e = new Date(u + 864e5 * t);
            return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
        }
        , d = {}
    let m = 0;
    const p = [];
    return e.forEach((t => {
        const e = t[2]
            , r = d[e]
            , u = t[4].split("~")
            , g = u[0].split(":")
            , f = {
                ...o[g[0]]
            };
        f.description = l[g[1]] || "",
            g.length > 2 && (f.neighborhood = h[g[2]]);
        let b = 0;
        if (u.length > 1) {
            const t = f.lat = Number(u[1])
                , e = f.lon = Number(u[2]);
            if (a) {
                const n = ha(t, e, !0);
                n && (b = 621371e-9 * (a.distanceTo(n) + .1))
            }
        }
        const y = s + t[1]
            , v = {
                postingId: i + t[0],
                postedDate: new Date(1e3 * y),
                categoryId: e,
                categoryAbbr: r,
                location: f,
                price: -1 !== t[3] ? t[3] : void 0,
                distance: b
            };
        for (; t.length > 5;) {
            const e = t.pop();
            if ("string" == typeof e)
                v.title = e;
            else if (Array.isArray(e)) {
                switch (e.shift()) {
                    case 1:
                        v.firstDate = c(e.shift()),
                            v.lastDate = c(e.shift()),
                            n <= v.lastDate && (v.sortUpcomingDate = v.firstDate > n ? v.firstDate : n);
                        break;
                    case 2:
                        {
                            v.openHouses = e.map(c);
                            const t = v.openHouses.find((t => t >= n));
                            t && (v.sortUpcomingDate = t);
                            break
                        }
                    case 3:
                        {
                            v.dates = e.map(c);
                            const t = v.dates.find((t => t >= n));
                            t && (v.sortUpcomingDate = t);
                            break
                        }
                    case 4:
                        v.imageIds = e;
                        break;
                    case 5:
                        v.bedrooms = e.shift(),
                            v.sqft = e.shift()
                }
            } else
                e < 0 ? v.dedupeKey = e : console.error("unknown compressed variant", "search", !0)
        }
        try {
            p.push(new Qo(v))
        } catch (t) {
            m = t
        }
    }
    )),
        m && console.error(m),
        p
}

// const n = data.data;
// n is result.data from response via craigslist api
const deob = (n) => {
    const items = al(n.decode, n.items, 0, new Date());
    items.forEach((item, i) => {
        items[i].kwargs.categoryAbbr = qn[item.kwargs.categoryId]
    })

    return items;
}

module.exports = deob;