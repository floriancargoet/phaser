/**
 * @author       Florian Cargoët <florian@floriancargoet.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var ConvertProperties = function (propertyList)
{
    var properties = {};
    if (Array.isArray(propertyList))
    {
        propertyList.forEach(function (property)
        {
            properties[property['name']] = property['value'];
        });
    }
    return properties;
};

module.exports = ConvertProperties;
