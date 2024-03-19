# TODO add icons 

import os
import ruamel.yaml
import json


from sphinx.application import Sphinx
from sphinx.util.fileutil import copy_asset_file


def copy_buttons(app: Sphinx, exc: None) -> None:
    
    current_dir = os.path.dirname(__file__)
    js_file = os.path.join(current_dir, 'static', 'custom.js')

    if app.builder.format == 'html' and not exc:
        
        staticdir = os.path.join(app.builder.outdir, '_static')
        launch_buttons_yaml = os.path.join(app.builder.srcdir, '_launch_buttons.yml')
    
        yaml_to_json(launch_buttons_yaml, os.path.join(staticdir, '_launch_buttons.json'))

        print(js_file, "nice hope this works first 2nd 3rd 4th 5th 6th change please! 7th 8th go")

        # Copy custom.js from static
        copy_asset_file(js_file, staticdir)
        # copy_asset_file(launch_buttons_json, staticdir)
        copy_asset_file(launch_buttons_yaml, staticdir)

# Function to convert yaml to json to prevent mixing of yaml and json for the user.
def yaml_to_json(yaml_file: str, json_file: str) -> None:
    with open(yaml_file, 'r') as ymlfile:
        yaml = ruamel.yaml.YAML(typ='safe')
        data = yaml.load(ymlfile)
        with open(json_file, 'w') as jsonfile:
            json.dump(data, jsonfile, indent=4)

def setup(app: Sphinx) -> dict[str, str]:
    app.add_js_file('custom.js')
    app.connect('build-finished', copy_buttons)
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
