import os
import json

def build_result_json():
    result = {}
    for path, subfolders, files in os.walk('.'):
        if path == '.':
            continue
        _, lang, key_prefix = (path + '/').split('/', 2)
        if lang not in result:
            result[lang] = {}
        for filename in filter(lambda x: x.endswith('.txt'), files):
            rows = open(os.path.join(path, filename)).readlines()
            result[lang][f'{key_prefix}{filename}'] = [row.strip() for row in rows]
    return result

def create_json_file():
    with open('data.json', 'w') as jsonfile:
        json.dump(build_result_json(), jsonfile)

if __name__ == "__main__":
    create_json_file()
