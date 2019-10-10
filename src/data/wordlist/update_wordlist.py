import os
import json

def build_result_json():
    result = {}
    for path, subfolders, files in os.walk('.'):
        if path == '.':
            continue
        key = path[2:] if path.startswith("./") else path
        result[key] = {}
        for filename in filter(lambda x: x.endswith('.txt'), files):
            rows = open(os.path.join(path, filename)).readlines()
            result[key][filename[:-4]] = [row.strip() for row in rows]
    return result

def create_json_file():
    with open('data.json', 'w') as jsonfile:
        json.dump(build_result_json(), jsonfile)

if __name__ == "__main__":
    create_json_file()
