import os
import json

def update_dict(data, key_list, value):
    if len(key_list) == 0:
        return
    key = key_list[0]
    if len(key_list) == 1:
        data[key] = value
    else:
        if key not in data:
            data[key] = {}
        update_dict(data[key], key_list[1:], value)

def build_result_json():
    result = {}
    for path, subfolders, files in os.walk('.'):
        if path == '.':
            continue
        key = path.split('/')
        for filename in filter(lambda x: x.endswith('.txt'), files):
            # print(path, filename, list(result.get('.', {}).get('si', {})))
            rows = open(os.path.join(path, filename)).readlines()
            update_dict(
                result, key+[filename], [row.strip() for row in rows]
            )
    print(list(result['.']))
    print(list(result['.']['en']))
    return result['.']

def create_json_file():
    with open('data.json', 'w') as jsonfile:
        json.dump(build_result_json(), jsonfile)

if __name__ == "__main__":
    create_json_file()
    # print(make_dict(['a', 'b'], 1))
