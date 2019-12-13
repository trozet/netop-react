var config = {
    "nodeAttrs": function (node) {
        var name = node.data.Name
        if (name.length > 8) {
            name = node.data.Name.substring(0, 12) + "."
        }

        var attrs = { classes: [node.data.Type], name: name, icon: "\uf192", weight: 0 }

        if (node.data.OfPort) {
            attrs.weight = 5
        }

        switch (node.data.Type) {
            case "device":
            case "PMDPort":
            case "VPort":
            case "PortInc":
            case "host":
                attrs.icon = "\uf109"
                attrs.weight = 3
                break
            case "bridge":
            case "ovsbridge":
                attrs.icon = "\uf6ff"
                attrs.weight = 4
                break
            case "erspan":
                attrs.icon = "\uf1e0"
                break
            case "vxlan":
            case "gre":
            case "gretap":
                attrs.icon = "\uf55b"
                break
            case "interface":
            case "tun":
            case "tap":
                attrs.icon = "\uf796"
                attrs.weight = 7
                break
            case "veth":
                attrs.icon = "\uf4d7"
                attrs.weight = 7
                break
            case "port":
            case "ovsport":
                attrs.icon = "\uf0e8"
                break
            case "netns":
                attrs.icon = "\uf24d"
                attrs.weight = 8
                break
            default:
                attrs.icon = "\uf192"
                break
        }

        if (node.data.Manager === "docker") {
            attrs.icon = "\uf395"
            attrs.classes.push('font-brands')
        }

        if (node.data.IPV4 && node.data.IPV4.length) {
            attrs.weight = 3
        }

        if (node.data.Type === "PortOut") {
            attrs.weight = 5
        }

        if (node.data.Type === "UrlFilter" || node.data.Type === "L2Forward" || node.data.Type === "Replicate") {
            attrs.weight = 4
        }

        return attrs
    },
    "weightTitles": {
        0: "Fabric",
        3: "Ingress",
        4: "Pipeline",
        5: "Egress",
        7: "Virtual",
        8: "Namespaces"
    },
    "suggestions": [
        "data.IPV4",
        "data.MAC",
        "data.Name"
    ]
}
